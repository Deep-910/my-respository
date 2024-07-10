import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faLocation } from '@fortawesome/free-solid-svg-icons';

function Checkout({ selectedItems }) {
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [addAddress, setAddAddress] = useState(false);

    const handleAddAddress = () => {
        setAddAddress(true);
    };

    useEffect(() => {
        // Calculate the total price based on the selected items and quantity
        const totalPrice = selectedItems.reduce((acc, item) => {
            // Calculate discounted price for each item
            const discountedPrice = item.p_price - (item.p_price * (item.discount / 100));
            return acc + discountedPrice * count;
        }, 0);
        setTotalPrice(totalPrice);
    }, [selectedItems, count]);

    return (
        <div>
            {/* item */}
            <div className='flex pt-[2rem]'>
                {/* show products */}
                <div className='w-2/3 pb-[1rem] px-[3rem]'>
                    {/* category */}
                    <p className='pb-[2rem] text-4xl font-bold'>Product Summary</p>
                    <div className='border-2 rounded-xl border-orange-500'>
                        <div className='pt-[2rem] hidden lg:flex gap-[19rem] font-bold justify-between px-[5rem] items-center border-b-2 pb-[2rem]'>
                            <p>Product</p>
                            <div className='flex justify-evenly gap-[14rem] items-center mr-[5rem]'>
                                <p>Price</p>
                            </div>
                        </div>
                        {/* product list */}
                        <div className='flex flex-col lg:px-[3rem] justify-evenly'>
                            {selectedItems.map((item, index) => {
                                // Calculate discounted price for each item
                                const discountedPrice = item.p_price - (item.p_price * (item.discount / 100));

                                return (
                                    <div key={index} className='py-[1rem] flex flex-col lg:flex-row justify-between border-b-2'>
                                        <div className='flex gap-[0.5rem] items-center'>
                                            <img className='w-[10rem] h-[8rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${item.img1}`} alt={item.pname} />
                                            <div className='w-[30rem]'>
                                                <p className='font-bold text-sm'>{item.pname}</p>
                                            </div>
                                        </div>
                                        <div className='ml-[1rem] flex lg:justify-evenly gap-[2rem] lg:gap-[10rem] items-center lg:w-[40rem]'>
                                            <p className='w-[5rem] text-sm text-center font-bold'>₹{discountedPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* total */}
                <div className='w-1/3 pb-[1rem] px-[2rem]'>
                    <p className='text-3xl font-bold'>Checkout</p>
                    <div className='text-orange-500 font-bold flex flex-col gap-[1rem] mt-[2rem] px-[2rem] py-[1rem] border-2 border-orange-500 rounded-xl'>
                        <div className='flex items-center justify-between border-b-2'>
                            <p className='pb-3'>Sub-total</p>
                            <p className='text-black'>₹{totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='flex items-center justify-between border-b-2'>
                            <p className='pb-3'>Shipping</p>
                            <p className='text-black'>FREE</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Total</p>
                            <p className='text-black'>₹{totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='py-[1rem]'>
                        <p className='text-xl font-bold'>Mode of Payment</p>
                        <div className='p-[1rem] flex items-center gap-[1rem]'>
                            <input type="radio" value="COD" name='mode of payment' />
                            <p className='font-semibold'>Cash on Delivery</p>
                        </div>
                        <div className='px-[1rem] flex items-center gap-[1rem]'>
                            <input type="radio" value="prepaid" name='mode of payment' />
                            <p className='font-semibold'>Prepaid Order</p>
                        </div>
                    </div>
                    <div className='py-[2rem] flex items-center gap-[2rem]'>
                        <button className='rounded-xl text-lg bg-orange-500 text-white px-[3rem] py-2'>Place Order</button>
                        <button className='text-orange-500 px-[3rem] text-lg'>Cancel</button>
                    </div>
                </div>
            </div>
            {/* address */}
            <div>
                <div className='mx-[2rem] mt-[2rem]'>
                    <h1 className='text-4xl font-semibold'>Select Address</h1>
                    <div>
                        {addAddress ? (
                            <div className='my-[2rem] p-[2rem] border-2 border-orange-500 rounded-lg'>
                                <p className='text-2xl mb-[2rem]'>Add new Address</p>
                                <div className='flex items-center gap-[1rem] text-lg bg-orange-500 text-white w-[20rem] px-4 py-2'>
                                    <FontAwesomeIcon icon={faLocation} />
                                    <button>Use my current location</button>
                                </div>
                                <form className='mt-[2rem] flex flex-col gap-[1.5rem]' action="submit">
                                    <div className='flex gap-[2rem]'>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='First Name' />
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="number" placeholder='10-digit mobile number' />
                                    </div>
                                    <div className='flex gap-[2rem]'>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="number" placeholder='Pincode' />
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='Locality' />
                                    </div>
                                    <div className='flex flex-col gap-[1rem]'>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[35rem]' type="text" name="address line 1" id="address" placeholder='Address Line 1' />
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[35rem]' type="text" name="address line 2" id="address" placeholder='Address Line 2' />
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[35rem]' type="text" name="address line 3" id="address" placeholder='Address Line 3' />
                                        <div className='flex gap-[2rem]'>
                                            <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='City' />
                                            <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='Landmark' />
                                        </div>
                                    </div>
                                    <label className='text-gray-500 text-sm' htmlFor="add-type">Address type</label>
                                    <div className='flex gap-[1rem]'>
                                        <input type="radio" value="home" name="add-type" /> Home
                                        <input type="radio" value="work" name="add-type" /> Work
                                    </div>
                                    <div className='flex items-center gap-[2rem]'>
                                        <button className='text-lg bg-orange-500 text-white px-[3rem] py-2'>Save</button>
                                        <button onClick={() => setAddAddress(false)} className='text-orange-500 px-[3rem] text-lg'>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className='text-orange-500 font-bold mt-[1rem] rounded-xl text-lg p-[1rem] border-2 border-orange-500 flex items-center gap-[2rem]'>
                                <FontAwesomeIcon icon={faAdd} />
                                <button onClick={handleAddAddress} className='w-full text-start'>Add New Address</button>
                            </div>
                        )}
                    </div>
                    {/* list of address */}
                    <div className='my-[2rem] border-2 border-orange-500 rounded-xl'>
                        <div className='border-b-2 p-4 flex gap-4'>
                            <input type="radio" value="address-1" name='address' />
                            <div className='font-bold flex items-center gap-[0.5rem]'>
                                <p>User name,</p>
                                <p>Phone number,</p>
                            </div>
                            <p className='font-bold'>Address sample</p>
                        </div>
                        <div className='border-b-2 p-4 flex gap-4'>
                            <input type="radio" value="address-2" name='address' />
                            <div className='font-bold flex items-center gap-[0.5rem]'>
                                <p>User name,</p>
                                <p>Phone number,</p>
                            </div>
                            <p className='font-bold'>Address sample</p>
                        </div>
                        <div className='border-b-2 p-4 flex gap-4'>
                            <input type="radio" value="address-3" name='address' />
                            <div className='font-bold flex items-center gap-[0.5rem]'>
                                <p>User name,</p>
                                <p>Phone number,</p>
                            </div>
                            <p className='font-bold'>Address sample</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
