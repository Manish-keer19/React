
import InputBox from './component/InputBox';
import { useState } from 'react';
import useCurrencyInfo from './hooks/usecurrencyInfo';



function App() {
    
 const [amount, setAmount] = useState(10);
 const [to, setTo] = useState("inr");
 const [from, setFrom] = useState();

 const handleChangeAmount= (e)=>{
 setAmount(e.target.value);
 }

 let option = useCurrencyInfo(from);
 console.log(option);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${"https://media.istockphoto.com/id/1061369956/photo/coin-stacks-and-chart-graphs-on-a-chessboard.webp?b=1&s=170667a&w=0&k=20&c=zcumQNaDUpaKYiQDLiNTn0bGOIETe8rXIicHH0jcHpU="}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                handleChangeAmount = {handleChangeAmount}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
