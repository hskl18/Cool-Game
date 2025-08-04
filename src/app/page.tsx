"use client";

import { useState, useEffect, useCallback } from "react";
import Game from "@/components/Game";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Game />
    </main>
  );
}
