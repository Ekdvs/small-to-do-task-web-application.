import React from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  onDone: (id: number) => void;
};

export default function TaskCard({ id, title, description, onDone }: Props) {
  return (
    <div className="bg-gray-200 p-4 rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        className="py-3 rounded-lg bg-gradient-to-r from-green-300 to-green-600 text-white font-semibold shadow-md hover:from-green-600 hover:to-green-1000 hover:font-bold active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        onClick={() => onDone(id)}
      >
        Done
      </button>
    </div>
  );
}
