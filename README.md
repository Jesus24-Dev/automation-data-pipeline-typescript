# Data Transformation Pipeline

A robust data processing pipeline built with TypeScript to clean, transform, validate, and normalize inconsistent JSON data.

## 🚀 Overview

In real-world automation workflows, data often comes from unreliable sources (APIs, forms, integrations).  
This project simulates a production-ready pipeline that processes "dirty" data and converts it into a consistent, validated format.

## ⚙️ Features

- Data cleaning and normalization
- Type conversion (string → number, string → boolean)
- Validation using Zod
- Error handling without breaking the pipeline
- Structured logging with Winston
- CLI execution
- Unit testing with Jest

## 🧠 Tech Stack

- TypeScript
- Node.js
- Zod
- Winston
- Jest

## 📥 Input Example

```json
[
  {
    "name": "  JOHN DOE ",
    "email": "JOHN@MAIL.COM",
    "age": "30",
    "phone": "+1 (555) 123-456",
    "active": "yes"
  }
]
```

## 📤 Output Example

```json
[  
	{    
	"name": "John Doe",    
	"email": "john@mail.com",    
	"age": 30,    
	"phone": "1555123456",    
	"active": true  
	}
]
```

## ▶️ Usage

```bash
npm install
npm run build
npm start input.json output.json
```

## 🧪 Run Tests

```bash
npm run test
```

## 📊 Output

The pipeline generates:

- Cleaned data (`output.json`)
- Error report (`errors.json`)
- CSV export (`output.csv`)

## 🧩 Use Cases

- Automation workflows (Zapier / Make)
- API data normalization
- ETL pipelines
- Webhook processing

## 📌 Key Concept

> Automation without data transformation is unreliable.

This project focuses on building a resilient transformation layer that ensures data consistency before usage.
