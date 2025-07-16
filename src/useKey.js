import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      //* Escucha a pesar de que solo se ejecuta una vez
      //* Y se pone aquí para evitar re renderizados innecesarios

      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
}
