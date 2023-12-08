import { setTheme } from "@/RTK/slices/themeSlice";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { theme } from "@/utils/theme";

interface themeButtonFace {
  className: string;
  children: ReactNode;
}

function ThemeButton({ className, children }: themeButtonFace) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme(theme()));
  }, [dispatch]);

  return (
    <button
      type="button"
      disabled={!dispatch}
      onClick={() => dispatch(setTheme(theme()))}
      className={className}
    >
      {children}
    </button>
  );
}

export default ThemeButton;
