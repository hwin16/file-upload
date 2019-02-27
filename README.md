# Description 
File-upload is the simple nodejs application for uploading files into the
webserver. 

# Installation
* node
* docker

# Run 
`$ docker build -t <name>:<tag> .` -- build docker container   
`$ docker run -p <hostport>:<dockerport> -v <host-path>:/usr/src/app/uploads <name>:<tag>` --  run container   
`$ docker ps` -- list the running docker    
`$ docker kill <container-name>` -- kill the running container   
