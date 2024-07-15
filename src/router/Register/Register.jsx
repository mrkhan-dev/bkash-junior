import logo from "../../assets/logo.png";
const Register = () => {
  return (
    <div className="lg:max-w-xl mx-auto mt-8 rounded-lg bg-[#FEEBED]">
      <div className=" rounded-lg  py-2">
        <div className="flex justify-center items-center mt-8">
          <h3 className="text-center text-4xl font-medium">
            {" "}
            <span className="text-[#D51465]">b</span>Kash
          </h3>
          <img className="h-24 absolute ml-36" src={logo} alt="" />
        </div>
        <p className="text-center mt-8 text-3xl font-medium">
          Welcome to <span className="text-[#D51465]">bKash app</span>
        </p>
        <p className="text-center text-xl text-[#D51465] mt-8">
          Phone Number / Account Number
        </p>
      </div>
    </div>
  );
};

export default Register;
