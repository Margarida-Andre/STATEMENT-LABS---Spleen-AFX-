import { Layout } from "../../views/layout";
import Image from "../../assets/image-log.svg";
import Logo from "../../assets/logo.svg";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Button } from "../../components/button";
import { Checkbox } from "../../components/checkbox";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/dashboard");
    }

    return(
        <Layout>
            <div className="flex items-center justify-between px-60">
            <div>
            <img src={Logo} alt="logo"/>
            <h1 className="text-white font-montserrat font-bold text-[32px] leading-[44.8px] tracking-[0px] mt-5">Olá, Seja bem-vindo</h1>
            <p className="text-white font-inter font-normal text-[16px] leading-[24px] tracking-[0px]">Aproveite da melhor coleção de música a sua escolha, entre agora</p>
           
            <form className="mt-12">
            <div className="flex-col mt-4">
            <Label>Email Address</Label>
            
            <div className="mt-2">
            <Input type="text" id="email" name="email" placeholder="willie.jennings@exemplo.com"/>
            </div>
            </div>

            <div className="relative flex-col mt-4">
            <Label>Password</Label>

            <div className="mt-2">
            <Input type={showPassword ? "text" : "password" } id="password" name="password" placeholder="8+ caracteres necessários"/>
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-14 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none"
        >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
            </div>
            </div>

            <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
            <Checkbox id="checkbox" name="checkbox"/>
            <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0px] text-white ml-3">Mantenha-me Logado</p>
            </div>
            <p className="font-montserrat font-semibold text-[14px] leading-[21px] tracking-[0px] text-[#FBE601]">Forget Password?</p>
            </div>

            <div className="flex items-center mt-2">
            <Checkbox id="checkbox" name="checkbox"/>
            <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0px] text-white ml-3">Eu aceito os <span className="text-[#FBE601]">Temos de uso</span> e <span className="text-[#FBE601]">Subscrições</span></p>
            </div>

            <div className="mt-5">
            <Button onClick={handleSubmit}>Iniciar Sessão</Button>   
            </div>         
            </form> 
            </div>

            <img src={Image} alt="image"/>
            </div>

        </Layout>
    )
}