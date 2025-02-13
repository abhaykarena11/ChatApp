
const InputField = ({ icon: Icon, type, placeholder ,formData , name, setformData }) => {
    function changeHandler(e){
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 " />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black-500"
        value={formData[name]}
        onChange={changeHandler}
      />
    </div>
  );
};

export default InputField;
