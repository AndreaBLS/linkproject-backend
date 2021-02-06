const express = require('express')

const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

exports.s3Upload = async (req, res, next) => {

    console.log(req)
    let myFile = req.file.originalname.split(".")
    const fileType = myFile[myFile.length - 1]

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuid()}.${fileType}`,
        Body: req.file.buffer
    }
    try {
        s3.upload(params, (err, data) => {
            req.awsFile = data.Location
            next()
        })

    } catch (e) {
        return next(e)
    }
}

