package model

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var defaultDB *gorm.DB

func Init() {
	db, err := gorm.Open(sqlite.Open("ninja_fan_db.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	defaultDB = db

	err = defaultDB.AutoMigrate(&Product{})
	if err != nil {
		panic("failed to migrate")
	}
	err = defaultDB.AutoMigrate(&Order{})
	if err != nil {
		panic("failed to migrate")
	}
	err = defaultDB.AutoMigrate(&Link{})
	if err != nil {
		panic("failed to migrate")
	}
	err = defaultDB.AutoMigrate(&OrderProduct{})
	if err != nil {
		panic("failed to migrate")
	}
}
