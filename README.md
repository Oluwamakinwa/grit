# grit-landing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Application Instructions

### List of CMS Enpoints

* **Initialize Text** [https://seegrit.com/initialize](https://seegrit.com/initialize)
    This endpoint will initialize the website to the way it is currently in the Figma file (It will reset all changes made in the CMS)
    
* **View the CMS** [https://seegrit.com/cms](https://seegrit.com/cms)
    This takes you to the CMS frontend **N.B** To delete any field, (e.g a team member or a team role) simply submit the field empty.
    
* **Download All Submitted Emails as CSV** [https://seegrit.com/emails_as_csv](https://seegrit.com/emails_as_csv)
    This downloads all the emails input for users expecting notifications as a csv file.
    
* **Password** 
    The password at the time of this writing is **Grit|5thefuTur3**. But it can easily be changed, just follow these instructions:
    1. **Change the Password you want in the Heroku Dashboard**
      In the Heroku dashboard where the application is deployed, in the settings tab, edit the Config Var whose name is **CMS_PASSWORD** to the desired new     password
    1. **Visit the Endpoint to Implement the Change on the Database**
      After updating the new password in the heroku dashboard, visit this endpoint: [https://seegrit.com/reset_password](https://seegrit.com/reset_password) to effect the change.
