import { useEffect, useState, useRef } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void
    value?: number;
    initialValues?: InitialValues
}

export const useProducts = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState(initialValues?.count || value);

    console.log(initialValues?.count, 'aeaeaeaea')
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        if (initialValues?.maxCount && initialValues?.maxCount < counter + value) return;
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    };

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])



    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        reset
    }
}
