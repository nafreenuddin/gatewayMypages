// import { Router } from 'express';
// import axios from 'axios';

// const router = Router();
// const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:5001';

// router.post('/checkUser', async (req, res) => {
//   try {
//     const response = await axios.post(`${AUTH_SERVICE_URL}/api/checkUser`, req.body);
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     if ((error as any).response) {
//       res.status((error as any).response.status).json((error as any).response.data);
//     } else {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const response = await axios.post(`${AUTH_SERVICE_URL}/api/login`, req.body);
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     if ((error as any).response) {
//       res.status((error as any).response.status).json((error as any).response.data);
//     } else {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
// });

// router.post('/register', async (req, res) => {
//   try {
//     const response = await axios.post(`${AUTH_SERVICE_URL}/api/register`, req.body);
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     if ((error as any).response) {
//       res.status((error as any).response.status).json((error as any).response.data);
//     } else {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
// });

// export default router;
import { Router } from "express";
import axios from "axios";

const router = Router();
const AUTH_SERVICE_URL =
  process.env.AUTH_SERVICE_URL || "http://localhost:5001";

router.post("/register", async (req, res) => {
  console.log("Received request to /auth/register in gateway");
  try {
    const response = await axios.post(
      `${AUTH_SERVICE_URL}/api/register`,
      req.body
    );
    console.log("Forwarded request to auth-service, response:", response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error forwarding request to auth-service:", error);
    if ((error as any).response) {
      res
        .status((error as any).response.status)
        .json((error as any).response.data);
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

router.post('/checkUser', async (req, res) => {
  console.log('Received request to /auth/checkUser in gateway');
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/api/checkUser`, req.body);
    console.log('Forwarded request to auth-service, response:', response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error forwarding request to auth-service:', error);
    if ((error as any).response) {
      res.status((error as any).response.status).json((error as any).response.data);
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

router.post('/login', async (req, res) => {
  console.log('Received request to /auth/login in gateway');
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/api/login`, req.body);
    console.log('Forwarded request to auth-service, response:', response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error forwarding request to auth-service:', error);
    if ((error as any).response) {
      res.status((error as any).response.status).json((error as any).response.data);
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

export default router;
