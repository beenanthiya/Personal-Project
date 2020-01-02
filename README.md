# Rich Bank

## 📘 Description

Rich Bank คือ ระบบ Internet Banking ที่สามารถตรวจสอบข้อมูลบัญชีของผู้ใช้ สามารถแสดงรายการธุรกรรมของผู้ใช้ และสามารถโอนเงินไปยังบัญชีอื่นได้

## 🛠 Structure

```
graph LR;
  richbank-front-end --> richbank-back-end;
  richbank-back-end -->|JWT| PassportJS;
  PassportJS -->|Authentication| richbank-back-end;
  richbank-back-end --> Sequelize;
  Sequelize --> MySQL;
```

## 📋 Features

- ตรวจสอบข้อมูลบัญชีของผู้ใช้
- แสดงรายการธุรกรรมของผู้ใช้
- โอนเงินไปยังบัญชีอื่น
