import {React, useState} from 'react'
import dropdownIcon from "../../image/chevron-down-svgrepo-com.svg";
import { categories } from '../constants/add-expense';
import planIcon from "../../image/plan-plane-svgrepo-com.svg";
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/action/expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModel from './success-model';
import "./add-form.css";

const AddFrom = () => {
    const cat = categories;
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [catOpen, setCatOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if(isNaN(val)){
            setAmount("");
            return;
        }
        setAmount(val);
    }

    const handleCategory = (category) => {
        setCategory(category)
        setCatOpen(false)
    }

    const handleSubmit = () => {
        if(title === "" || amount === "" || !category){
            const notify = () => toast("Please add all!");
            notify();
            return;
        }
        const data = {
            title, amount, category, 
            createdAt: new Date()
        }
        setIsModalOpen(true)
        dispatch(addExpense(data))
    }
    return (
        <div className='add-form'>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <SuccessModel 
                modalOpen={isModalOpen}
                setModalOpen={setIsModalOpen}
            />
            <div className='form-item'>
                <label>Title</label>
                <input 
                    placeholder='Give a name to your expenditure'
                    value={title}
                    onChange={(e)=>handleTitle(e)}
                />
            </div>
            <div className='form-item'>
                <label>Amount ₹</label>
                <input 
                    className='amount-input'
                    value={amount}
                    placeholder='Enter amount'
                    onChange={(e)=>handleAmount(e)}
                />    
            </div>
            <div className='category-container-parent'>
                <div className='category' onClick={()=>setCatOpen(!catOpen)}>
                    <div className='category-dropdown'>
                        <label>{category ? category.title : "Category"}</label>
                        <img style={{width:"25px", height:"25px", cursor: "pointer"}} src={dropdownIcon} />
                    </div>
                    {catOpen &&
                        <div className='category-container'>
                            {cat.map((category)=>
                                <div 
                                    className='category-item'
                                    style={{
                                        borderRight: `5px solid ${category.color}`
                                    }}
                                    key={category.id}
                                    onClick={()=>handleCategory(category)}
                                >
                                    <label>{category.title}</label>
                                    <img style={{width:"25px"}} src={category.icon.default} alt={category.title} />
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <img style={{width:"25px", height:"25px"}} src={planIcon} />
                </div>
            </div>
        </div>
    )
}

export default AddFrom