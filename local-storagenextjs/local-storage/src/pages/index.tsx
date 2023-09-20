'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import secureLocalStorage from "react-secure-storage";


export default function Home() {
// const [username, setUsername] = useState<string | null>(null);

// const [userId, setUserId] = useState<string | null>(null);
// const [userData, setUserData] = useState<{email: string, age: number} | null>(null);
// const [keys, setKeys] = useState<string[]>([]);
// const [length, setLength] = useState<number>(0);

const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");  
  const [fetchedUsername, setFetchedUsername] = useState("");
  const [fetchedPassword, setFetchedPassword] = useState("");
  const handleSubmit = () => {
    // Encrypt credentials
    secureLocalStorage.setItem("username", username);
    secureLocalStorage.setItem("password", password);
  };
  const handleRetrieve = () => {
    // Retrieve and decrypt credentials
    const decryptedUsername = secureLocalStorage.getItem("username") as string;
    const decryptedPassword = secureLocalStorage.getItem("password") as string;
    setUsername(decryptedUsername);
    setPassword(decryptedPassword);
  };
  const handleRemovePassword = () => {
    // Remove password
    secureLocalStorage.removeItem("password");
    handleRetrieve();
  };
  const handleClear = () => {
    // Clear credentials
    secureLocalStorage.clear();
    handleRetrieve();
  };


// useEffect(() => {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     let username = localStorage.getItem('username');
//     let userId = localStorage.getItem('userId');
//     let userData = JSON.parse(localStorage.getItem('userData')!);
//     let keys: string[] = [];
//     for (let i = 0; i < localStorage.length; i++) {
//       keys.push(localStorage.key(i)!);
//     }
//     setUsername(username);
//     setUserId(userId);
//     setUserData(userData);
//     setKeys(keys);
//     setLength(localStorage.length);
//   }
// }, []);
// function handleSave() {
//   if (typeof window !== "undefined" && window.localStorage) {
//     // localStorage.setItem("username", "Anisha");
//     // localStorage.setItem("userId", "12345");
//     // adding security feature
//     secureLocalStorage.setItem('username', 'anisha');
//     secureLocalStorage.setItem('password', 'password');
//     localStorage.setItem("userData", JSON.stringify({ email: "anisha@example.com", age: 25 }));

//     let username = localStorage.getItem("username");
//     let userId = localStorage.getItem("userId");
//     let userData = JSON.parse(localStorage.getItem("userData")!);
//     let keys: string[] = [];
//     for (let i = 0; i < localStorage.length; i++) {
//       keys.push(localStorage.key(i)!);
//     }

//     setUsername(username);
//     setUserId(userId);
//     setUserData(userData);
//     setKeys(keys);
//     setLength(localStorage.length);
//   }
// }
// function handleRemove() {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     localStorage.removeItem('username');
//     setUsername(null);
//   }
// }
// function handleClear() {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     localStorage.clear();
//     setUsername(null);
//     setUserId(null);
//     setUserData(null);
//   }
// }

  return (
    <div>
    {/* <div><button onClick={handleSave}>Save to localStorage-click on me</button></div>
    <div><button onClick={handleRemove}>Remove from localStorage-click on me</button></div>
    <div><button onClick={handleClear}>Clear localStorage-click on me</button></div>
    <p>Username: {username}</p>
    <p>UserId: {userId}</p>
    <p>UserData: {JSON.stringify(userData)}</p>
    <p>List of Keys: {keys.join(", ")}</p>
    <p>Total Items in Local Storage: {length}</p> */}
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleRetrieve}>Retrieve</button>
      <button onClick={handleRemovePassword}>Remove password</button>
      <button onClick={handleClear}>Clear</button>
      <div>
        <p>Username: {fetchedUsername}</p>
        <p>Password: {fetchedPassword}</p>
      </div>
  </div>
  )
}
