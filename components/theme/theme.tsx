"use client";
import { setTheme } from "@/RTK/slices/themeSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Theme() {
  const dispatch = useDispatch();

  useEffect(() => {
    const dark = localStorage.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    dispatch(setTheme(dark))
  }, [dispatch]);

  return <></>;
}

export default Theme;
