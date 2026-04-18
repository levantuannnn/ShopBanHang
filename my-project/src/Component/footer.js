import React from "react";

function Footer() {
    return (
        <footer className=" w-full bg-slate-900 text-white mt-2">
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                <div>
                    <h2 className="text-xl font-semibold mb-2">Hỗ trợ</h2>
                    <p>Hotline: <span className="text-yellow-400">092883849</span></p>
                    <p>Email: support@gmail.com</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">Về chúng tôi</h2>
                    <p>Uy tín làm nên hàng đầu</p>
                    <p>Cam kết chất lượng sản phẩm</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">Liên hệ</h2>
                    <p>Facebook</p>
                    <p>Zalo</p>
                    <p>Instagram</p>
                </div>

            </div>

            <div className="text-center py-4 border-t border-slate-700 text-sm">
                © 2026 Shop của bạn - All rights reserved
            </div>
        </footer>
    );
}

export default Footer;