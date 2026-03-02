/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, Sticker, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function App() {
  // Requirement 1: Image Border Toggle
  const [hasBorder, setHasBorder] = useState(false);

  // Requirement 2: Sticker Order
  const [sticker1, setSticker1] = useState<number>(0);
  const [sticker2, setSticker2] = useState<number>(0);
  const [sticker3, setSticker3] = useState<number>(0);

  const totalStickers = (sticker1 || 0) + (sticker2 || 0) + (sticker3 || 0);
  const stickerMessage = totalStickers <= 10 
    ? `Llevas ${totalStickers} stickers` 
    : "Llevas demasiados stickers";

  // Requirement 3: Password Check
  const [pass1, setPass1] = useState('1');
  const [pass2, setPass2] = useState('1');
  const [pass3, setPass3] = useState('1');
  const [passResult, setPassResult] = useState('');

  const handlePasswordCheck = () => {
    const password = `${pass1}${pass2}${pass3}`;
    if (password === '911') {
      setPassResult('password 1 correcto');
    } else if (password === '714') {
      setPassResult('password 2 es correcto');
    } else {
      setPassResult('password incorrecto');
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 p-4 md:p-8 font-sans text-stone-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 italic serif">Desafío 2 - Condiciones</h1>
          <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">Academia de Talentos Digitales</p>
        </header>

        {/* Requirement 1: Image Border Toggle */}
        <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <Shield className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-semibold">1. Borde de Imagen</h2>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-stone-600 text-sm text-center max-w-md">
              Haz clic en la imagen para agregar o quitar un borde rojo de 2 píxeles.
            </p>
            <div className="relative group cursor-pointer">
              <img
                src="https://picsum.photos/seed/nature/400/300"
                alt="Nature"
                referrerPolicy="no-referrer"
                onClick={() => setHasBorder(!hasBorder)}
                className={`rounded-lg transition-all duration-300 ${
                  hasBorder ? 'border-[2px] border-red-600' : 'border-0'
                }`}
              />
              {!hasBorder && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
                  <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-medium shadow-sm">Click para borde</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Requirement 2: Sticker Order */}
        <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <Sticker className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-semibold">2. Pedido de Stickers</h2>
          </div>
          <div className="space-y-8">
            <p className="text-stone-600 text-sm text-center">Puedes llevar hasta 10 stickers en total.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-3">
                <img src="https://picsum.photos/seed/sticker1/150/150" alt="Sticker 1" referrerPolicy="no-referrer" className="rounded-xl shadow-sm w-32 h-32 object-cover" />
                <input
                  type="number"
                  min="0"
                  value={sticker1}
                  onChange={(e) => setSticker1(parseInt(e.target.value) || 0)}
                  className="w-20 px-3 py-2 border border-stone-200 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col items-center space-y-3">
                <img src="https://picsum.photos/seed/sticker2/150/150" alt="Sticker 2" referrerPolicy="no-referrer" className="rounded-xl shadow-sm w-32 h-32 object-cover" />
                <input
                  type="number"
                  min="0"
                  value={sticker2}
                  onChange={(e) => setSticker2(parseInt(e.target.value) || 0)}
                  className="w-20 px-3 py-2 border border-stone-200 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col items-center space-y-3">
                <img src="https://picsum.photos/seed/sticker3/150/150" alt="Sticker 3" referrerPolicy="no-referrer" className="rounded-xl shadow-sm w-32 h-32 object-cover" />
                <input
                  type="number"
                  min="0"
                  value={sticker3}
                  onChange={(e) => setSticker3(parseInt(e.target.value) || 0)}
                  className="w-20 px-3 py-2 border border-stone-200 rounded-lg text-center focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="pt-4 text-center">
              <p className={`text-lg font-medium px-4 py-2 rounded-full inline-block ${
                totalStickers <= 10 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
              }`}>
                {stickerMessage}
              </p>
            </div>
          </div>
        </section>

        {/* Requirement 3: Password Check */}
        <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
            <Lock className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-semibold">3. Verificador de Password</h2>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-lg font-medium text-stone-700">Ingresa el password</h3>
            <div className="flex gap-4">
              {[setPass1, setPass2, setPass3].map((setter, i) => (
                <select
                  key={i}
                  onChange={(e) => setter(e.target.value)}
                  className="px-4 py-2 border border-stone-200 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer hover:border-stone-300 transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              ))}
            </div>
            <button
              onClick={handlePasswordCheck}
              className="px-8 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 active:scale-95 transition-all shadow-md"
            >
              Ingresar
            </button>
            {passResult && (
              <div className={`flex items-center gap-2 px-4 py-3 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg ${
                passResult.includes('incorrecto') 
                  ? 'bg-red-50 text-red-700 border border-red-100 shadow-red-500/40'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-emerald-500/20'
              }`}>
                {passResult.includes('incorrecto') ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                <p className="font-medium">{passResult}</p>
              </div>
            )}
          </div>
        </section>

        <footer className="text-center py-8 border-t border-stone-200">
          <p className="text-stone-400 text-sm">© 2026 Desafío Latam - Ejercicios de Condiciones</p>
        </footer>
      </div>
    </div>
  );
}
