<h1 align="center" id="title">OTP BUILDER</h1>


<p id="description">A versatile npm module for OTP (One-Time Password) generation verification and management.</p>

<h2> Features</h2>

Here're some of the project's best features:

*   OTP generation
*   OTP verification
*   OTP storage with custom identifiers
*   Configurable expiry time
*   Secure OTP generation using secret keys



<h2>️ Installation Steps:</h2>

<p>1. install using npm</p>

```
npm install otp-builder
```

<h3> Genrate Otp</h3>


<img src="https://res.cloudinary.com/doumu61nd/image/upload/v1720443405/code%201.png" alt="project-screenshot" width="1000" height="400/">


<h3> Verify Otp</h3>

<img src="https://res.cloudinary.com/doumu61nd/image/upload/v1720443791/code%202.png" alt="project-screenshot" width="1000" height="400/">

  
  


| Property    | Description     |
|--------------|---------------|
| `digits` | The number of digits in the generated OTP. (default = 4) |
| `expirySeconds` | The time in seconds after which the OTP will expire. Here, it's set to 35 seconds, so the OTP will be valid for 35 seconds from the time of generation. (default = 30 )  |
| `identifier` |  A unique identifier associated with the OTP. This could be an email address, phone number, or any other unique identifier for the user or session. In this example, it's set to "example@gmail.com". |
| `secret` | A secret key used to enhance the security of the OTP generation process. It's a string of random characters that adds an extra layer of randomness and security to the OTP.  |

  