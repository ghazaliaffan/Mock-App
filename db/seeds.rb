# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "affanghazali@gmail.com", password: "affantest", admin: "true", name: "Affan M. Ghazali", phone: "03039138186")
User.create!(email: "anaswaseem@gmail.com", password: "affantest", admin: "false", name: "Syed Anas Waseem", phone: "03039138186")
User.create!(email: "ahmedhashir@gmail.com", password: "affantest", admin: "false", name: "Ahmed Hashir", phone: "03039138186")
User.create!(email: "abdulbasit@gmail.com", password: "affantest", admin: "true", name: "Abdul Basit", phone: "03039138186")
User.create!(email: "huzaifakhan@gmail.com", password: "affantest", admin: "false", name: "Huzaifa Khan", phone: "03039138186")
User.create!(email: "yasirobaid@gmail.com", password: "affantest", admin: "false", name: "Yasir Obaid", phone: "03039138186")
