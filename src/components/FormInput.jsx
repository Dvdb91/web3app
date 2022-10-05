

const FormInput = (props) => {
    const classesInput = "px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"

return (
<div>
    <label className="block mb-4">
        <p className="mb-2 text-gray-900 font-semibold leading-normal">{props.labelText}</p>
            <input 
            className={classesInput}
            value={props.value}
            id={props.id} type={props.type} 
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}>
            </input>
    </label>
</div>
          )
}

export default FormInput;