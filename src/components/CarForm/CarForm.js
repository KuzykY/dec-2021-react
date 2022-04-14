import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carVaridator} from "../../validators";
import {useEffect} from "react";

const CarForm = ({setNewCar,carForUpdate,setUptadeCar}) => {
    const {register,reset,handleSubmit,formState:{errors},setValue}=useForm({
        resolver:joiResolver(carVaridator),
        mode:"onTouched"});
    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])
    const submit = async (car) => {
        try {
            if(carForUpdate){
                const {data} = await carService.updateById(carForUpdate.id,car);
                setUptadeCar(data);
            } else {
                const {data} = await carService.create(car);
                setNewCar(data);
            }
            reset()
        } catch (e) {
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text"{...register('model')}/></label></div>
            {errors.model && <span>{errors.model[0]}</span>}
            <div><label>Price:<input type="text"{...register('price',{valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price[0]}</span>}
            <div><label>Year:<input type="text"{...register('year',{valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year[0]}</span>}
            <button>Save</button>
        </form>
    );
};

export {CarForm} ;