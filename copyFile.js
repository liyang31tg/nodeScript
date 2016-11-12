import fs from 'fs'

const inputStr 	= "/Users/liyang/Library/Developer/Xcode/DerivedData/moudleA-fuowbugxghyzzjfmrcregwrumvvo/Build/Products/Debug-iphoneos/moudleA.framework"
const outputStr = "/Users/liyang/Desktop/testSwift3GCD/testSwift3GCD/moudleA.framework"

fs.watchFile(inputStr,()=>{
	const inputStream = fs.createReadStream(inputStr)
	const outputStream = fs.createWriteStream(outputStr)
	inputStream.pipe(outputStream)
	console.log("文件copy成功")
})