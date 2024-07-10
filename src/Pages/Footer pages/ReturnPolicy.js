import React from 'react'

function ReturnPolicy() {
  return (
    <div className='bg-gray-100 '>
        <div className='lg:mx-[10rem] flex items-center flex-col gap-[2rem] bg-white p-[1rem] lg:p-[2rem] text-justify'>
            <p className='text-2xl text-center font-bold'>Order Cancellation and Return Policy</p>
            <div className='flex flex-col gap-[1rem] bg-white p-[2rem] text-justify'>
                <p className='text-2xl font-bold text-center'>Cancellation Policy</p>
                <p>The customer can choose to cancel an order any time before it's dispatched. The order cannot be canceled once it’s out for delivery. However, the customer may choose to reject it at the doorstep.</p>
                <p>The time window for cancellation varies based on different categories and the order cannot be canceled once the specified time has passed.</p>
                <p>In some cases, the customer may not be allowed to cancel the order for free, post the specified time and a cancellation fee will be charged. The details about the time window mentioned on the product page or order confirmation page will be considered final.</p>
                <p>In case of any cancellation from the seller due to unforeseen circumstances, a full refund will be initiated for prepaid orders.</p>
                <p>Waltzer reserves the right to accept the cancellation of any order. Waltzer also reserves the right to waive off or modify the time window or cancellation fee from time to time.</p>
            </div>
            <div className='flex flex-col gap-[2rem] bg-white p-[2rem] text-justify'>
                <p className='text-2xl font-bold text-center'>Return/Refund Policy</p>
                <p>Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy. Do refer the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy and the table below</p>
                <p>The return policy is divided into three parts; Do read all sections carefully to understand the conditions and cases under which returns will be accepted.</p>
                <p>General Rules for a successful Return:</p>
                <ul className='flex flex-col gap-[1rem]'>
                    <li>• In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given.</li>
                    <li>• In cases where a product accessory is found missing/damaged/defective, the seller may either process a replacement of the particular accessory or issue an eGV for an amount equivalent to the price of the accessory, at the seller’s discretion.</li>
                    <li>• During open box deliveries, while accepting your order, if you received a different or a damaged product, you will be given a refund (on the spot refunds for cash-on-delivery orders). Once you have accepted an open box delivery, no return request will be processed, except for manufacturing defects. In such cases, these category-specific replacement/return general conditions will be applicable. Click here to know more about Open Box Delivery</li>
                    <li>• For Furniture, any product-related issues will be checked by authorised service personnel (free of cost) and attempted to be resolved by replacing the faulty/ defective part of the product. Full replacement will be provided only in cases where the service personnel opines that replacing the faulty/defective part will not resolve the issue.'</li>
                </ul>
                <p>Waltzer holds the right to restrict the number of returns created per order unit, post the evaluation of the product/order defect is undertaken by Waltzer’s authorized representative.</p>
            </div>
        </div>
    </div>
  )
}

export default ReturnPolicy