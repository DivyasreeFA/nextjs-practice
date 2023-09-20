'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

export default function Home() {
const [username, setUsername] = useState<string | null>(null);
const [userId, setUserId] = useState<string | null>(null);
const [userData, setUserData] = useState<{email: string, age: number} | null>(null);
const [keys, setKeys] = useState<string[]>([]);
const [length, setLength] = useState<number>(0);
useEffect(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    let username = localStorage.getItem('username');
    let userId = localStorage.getItem('userId');
    let userData = JSON.parse(localStorage.getItem('userData')!);
    let keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i)!);
    }
    setUsername(username);
    setUserId(userId);
    setUserData(userData);
    setKeys(keys);
    setLength(localStorage.length);
  }
}, []);
function handleSave() {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("username", "Anisha");
    localStorage.setItem("userId", "12345");
    localStorage.setItem("userData", JSON.stringify({ email: "anisha@example.com", age: 25 }));

    let username = localStorage.getItem("username");
    let userId = localStorage.getItem("userId");
    let userData = JSON.parse(localStorage.getItem("userData")!);
    let keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i)!);
    }

    setUsername(username);
    setUserId(userId);
    setUserData(userData);
    setKeys(keys);
    setLength(localStorage.length);
  }
}
function handleRemove() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem('username');
    setUsername(null);
  }
}
function handleClear() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.clear();
    setUsername(null);
    setUserId(null);
    setUserData(null);
  }
}

  return (
    <div>
    <div><button onClick={handleSave}>Save to localStorage-click on me</button></div>
    <div><button onClick={handleRemove}>Remove from localStorage-click on me</button></div>
    <div><button onClick={handleClear}>Clear localStorage-click on me</button></div>
    <p>Username: {username}</p>
    <p>UserId: {userId}</p>
    <p>UserData: {JSON.stringify(userData)}</p>
    <p>List of Keys: {keys.join(", ")}</p>
    <p>Total Items in Local Storage: {length}</p>
  </div>
  )
}
