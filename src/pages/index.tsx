import { useCallback } from "react";

export default function Home() {
  const handleClick = useCallback(() => {
    alert("ボタンがクリックされました！");
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Hello, t3-todo-app</h1>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        ボタン
      </button>
    </div>
  );
}
