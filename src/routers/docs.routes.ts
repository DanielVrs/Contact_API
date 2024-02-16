import path from "path";
import express from "express";

const staticPath = path.join(__dirname, "../docs");
app.use("/api-docs", express.static(staticPath));
