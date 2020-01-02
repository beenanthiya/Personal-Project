# Rich Bank

## 📘 Description

Rich Bank คือ ระบบ Internet Banking ที่สามารถตรวจสอบข้อมูลบัญชีของผู้ใช้ สามารถแสดงรายการธุรกรรมของผู้ใช้ และสามารถโอนเงินไปยังบัญชีอื่นได้

## Bu

- [x] Cup

## 🛠 Structure

```
graph LR;
  richbank-frontend --> richbank-backend;
  richbank-backend -->|JWT| PassportJS;
  PassportJS -->|Authentication| richbank-backend;
  richbank-backend --> Sequelize;
  Sequelize --> MySQL;
```

## 📋 Features

- ตรวจสอบข้อมูลบัญชีของผู้ใช้
- แสดงรายการธุรกรรมของผู้ใช้
- โอนเงินไปยังบัญชีอื่น
