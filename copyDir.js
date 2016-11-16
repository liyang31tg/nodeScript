import fs from 'fs'
import shell from 'shelljs' 
const inputStr 	= "/Users/liyang/Library/Developer/Xcode/DerivedData/moudleA-fuowbugxghyzzjfmrcregwrumvvo/Build/Products/Debug-iphoneos/moudleA.framework"

fs.watchFile(inputStr,()=>{
	console.log("文件变动")
	shell.exec("rm -r /Users/liyang/Desktop/testSwift3GCD/testSwift3GCD/moudleA.framework")
	shell.exec("cp -r /Users/liyang/Library/Developer/Xcode/DerivedData/moudleA-fuowbugxghyzzjfmrcregwrumvvo/Build/Products/Debug-iphoneos/moudleA.framework  /Users/liyang/Desktop/testSwift3GCD/testSwift3GCD")
	
})