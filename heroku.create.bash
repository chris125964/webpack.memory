#!/bin/bash

if [[ $# == 0 ]]
then
	export PROJECT=xxmemory
else
	export PROJECT=$1
fi

heroku apps:create --region=eu $PROJECT --buildpack mars/create-react-app
