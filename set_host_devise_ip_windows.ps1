# Obtener la dirección IP de la interfaz activa
$HOST_DEVICE_IP = (ipconfig | Select-String -Pattern 'IPv4' | Select-Object -First 1).ToString().Split(':')[-1].Trim()

# Exportar la variable de entorno
[System.Environment]::SetEnvironmentVariable('HOST_DEVICE_IP', $HOST_DEVICE_IP, [System.EnvironmentVariableTarget]::Process)
