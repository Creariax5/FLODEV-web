const FormInput = ({ placeholder, type }) => (
    <div className="relative group">
        <div className="absolute inset-0 custom-bg rounded-lg opacity-75 blur-sm group-focus-within:opacity-100 transition-opacity"></div>
        <input
            type={type}
            placeholder={placeholder}
            className="relative w-full bg-gray-800 rounded-lg px-6 py-4 focus:outline-none"
        />
    </div>
);

export default FormInput;
