@echo off
if exist c:\progra~1\test\aaa.txt del c:\progra~1\test\aaa.txt /F /Q
ping 127.0.0.1 -n 3
if exist c:\progra~1\test\aaa.txt goto error1
copy aaa.bak c:\progra~1\test\aaa.txt
ping 127.0.0.1 -n 3
if not exist c:\progra~1\test\aaa.txt goto error2
start mshta vbscript:msgbox("已经替换成功!",0,"替换成功")(window.close)
goto end
:error2
start mshta vbscript:msgbox("文件替换失败!",0,"提示")(window.close)
goto end
:error1
start mshta vbscript:msgbox("文件删除失败!",0,"提示")(window.close)
:end