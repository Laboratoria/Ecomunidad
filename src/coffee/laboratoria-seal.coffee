# 'use strict'


# LaboratoriaBanner = () ->

#   this.labBanner = document.getElementById('laboratoria-banner')
#   this.template = '<div class="laboratoria-icon" style="background-image: url(assets/img/laboratoria-icon-black.png)"></div>
#                   <div class="laboratoria-label">
#                     <p>Proyecto desarrollado por<br><a href="http://laboratoria.la" target="_blank">laboratoria.la</a></p>
#                   </div>'

#   return


# LaboratoriaBanner.prototype.appendStyles = ()->
#   labStyles = document.createElement('link')
#   labStyles.type = 'text/css'
#   labStyles.rel = 'stylesheet'
#   labStyles.href = 'https://raw.githubusercontent.com/Laboratoria/Laboratoria.02/master/02.23.15/css/project.css'
#   document.getElementsByTagName("head")[0].appendChild(labStyles)
#   return

# LaboratoriaBanner.prototype.appendTemplateToElement = ()->
#   console.log this.labBanner
#   this.labBanner.innerHTML = this.template
#   return

# banner = new LaboratoriaBanner()
# banner.appendStyles()
# banner.appendTemplateToElement()

























