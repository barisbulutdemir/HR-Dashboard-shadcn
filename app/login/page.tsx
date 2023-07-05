"use client"


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import cookie from 'cookie'; // Add this

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this

  // Check if user is logged in
  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies.access) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/user/login/", userData);
      const data = await response.data;

      const accessToken = data.access;
      const refreshToken = data.refresh;

      if (accessToken && refreshToken) {
        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);

        // Save tokens to the cookies
        document.cookie = `access=${accessToken}; path=/`;
        document.cookie = `refresh=${refreshToken}; path=/`;

        // Redirect to the main page
        window.location.href = "/"; // or any URL to your main page
      } else {
        console.log("Access Token and/or Refresh Token is undefined.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Log out the user
  const logoutUser = () => {
    // Clear the cookies
    document.cookie = "access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Set isLoggedIn state to false
    setIsLoggedIn(false);

    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <div className=' mt-10 mx-auto flex justify-center items-center'>
      {isLoggedIn ? (
        <Button onClick={logoutUser}>Logout</Button>
      ) : (
        <Tabs defaultValue="account" className="w-[400px]">
          {/* The rest of your code... */}

          <div className=' mt-10 mx-auto flex justify-center items-center'>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Login
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={loginUser} className="space-y-1">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <CardFooter>
                  <Button type="submit">Login</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
        </Tabs>
      )}
    </div>
  )
};


export default LoginPage;
