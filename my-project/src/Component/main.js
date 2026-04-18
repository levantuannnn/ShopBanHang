import React, { useState, useEffect } from "react";

function Main() {
   const [endpoint, setEndpoint] = useState("products");
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [check, setCheck] = useState(false);
   useEffect(() => {
      const url = `http://127.0.0.1:8000/${endpoint}`;

      setLoading(true);

      fetch(url)
         .then(res => res.json())
         .then(result => {
            setData(result);
            setLoading(false);
         })
         .catch(() => setLoading(false));

   }, [endpoint]);

   return (
      <div className=" w-full min-h-screen bg-gradient-to-br from-slate-700 to-slate-900">
         <div className="max-w-7xl mx-auto px-4 py-6">

            <h1 className="text-3xl font-bold text-white mb-6 text-center">
               Danh sách sản phẩm
            </h1>

            <div className="flex justify-center gap-4 mb-6">
               <button
                  className="px-4 py-2 rounded-xl bg-blue-500 text-white"
                  onClick={() => setEndpoint("products")}
               >
                  Tất cả
               </button>

               <button
                  className="px-4 py-2 rounded-xl bg-green-500 text-white"
                  onClick={() => setEndpoint("products/sort/asc")}
               >
                  Tăng dần
               </button>

               <button
                  className="px-4 py-2 rounded-xl bg-red-500 text-white"
                  onClick={() => setEndpoint("products/sort/desc")}
               >
                  Giảm dần
               </button>
               <button onClick={() => setCheck(!check)}>Bộ lọc</button>
               <button onClick={() => setEndpoint("products/filter")} className="px-4 py-2 bg-slate-600 rounded-xl">lớn 1000</button>
               <button onClick={() => setEndpoint("products/bes")} className="px-4 py-2 bg-gray-800 rounded-xl" >Nho 1000</button>
            </div>

            {loading ? (
               <p className="text-center text-white">Đang tải...</p>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.map((item, index) => (
                     <div key={index} className="bg-white p-5 rounded-xl shadow">
                        <p className="text-gray-500">Giá</p>
                        <p className="text-lg font-bold text-green-600">{item.gia}</p>

                        <p className="text-gray-500 mt-2">ID</p>
                        <p className="text-lg">{item.product_id}</p>
                     </div>
                  ))}
               </div>
            )}

         </div>
      </div>
   );
}

export default Main;