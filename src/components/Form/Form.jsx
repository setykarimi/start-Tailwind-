import React from 'react';
import Button from '../Button/Button';
import Label from './items/Label';

const Form = () =>
{
    return (
        <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl text-gray-800 dark:text-white font-semibold">
            Classic utility Jacket
          </h1>
          <div className="text-xl font-semibold text-gray-500 dark:text-white">
            $110.00
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-white mt-2">
            In stock
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-2 flex">

            <Label text="Xs"/>
            <Label text="s"/>
            <Label text="L"/>
            <Label text="Xl"/>
            
          </div>

          <div className="ml-auto font-mono text-sm text-gray-500 dark:text-gray-100 xl:underline">
            Size Guide
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 space-x-2 mb-4 text-sm font-medium">
          <Button className="p-2  flex items-center justify-center rounded-md bg-black dark:bg-white dark:text-black text-white" type="submit" text="Buy Now"/>
          <Button className="p-2 flex items-center justify-center rounded-md border border-gray-300 dark:border-white dark:text-white" type="button" text="add To bag" />
          <Button className="flex-none flex items-center justify-center xl:w-9 h-9 rounded-md text-gray-400 border border-gray-300 dark:border-white dark:text-white sm:mt-2 mt-2 sm:w-100 w-100" type="button" aria-label="like" 
            text={<svg width="20" height="20" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>}
          />
            
          
          <p className="text-sm text-gray-500 dark:text-gray-100 lg:mt-3 md:mt-3"> 
            Free Shipping on All Continental Us orders.
          </p>
        </div>
      </form>
    )
}

export default Form;