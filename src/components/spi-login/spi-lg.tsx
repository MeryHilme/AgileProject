import { Component } from '@stencil/core';


@Component({
    tag: 'spi-lg',
    styleUrl: 'spi-lg.scss'
})
export class SpiLg {
    
    render() {
        return (
        <section class="login is-fullheight">
      <div class="login-body">
        <div class="container v-middle">
          <div class="columns login-page">
              <div class="column is-5 login-sidebar is-hidden-mobile">
                <div class="login-gradient-background">
                  <h1>Bienvenue à la plateforme SPI-ADM</h1>
                </div>
              </div>
              <div class="column is-7 login-form-wrapper">
                
                <div class="column is-12 field-box">
                  <div class="column is-7 is-offset-1">
                    <h1 class="login-heading">Se connecter</h1>
                    <p class="login-subheading">Vous devez se connecter pour accéder.</p>
                    <form>
                      <div class="field">
                        <p class="control has-icons-left has-icons-right">
                          <input class="input " type="text" placeholder="Nom" value="" name="text" autofocus="" required/>
                          <span class="icon is-left">
                            <i class="fa fa-envelope"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fa fa-check"></i>
                          </span>
                        </p>
                      </div>
                      <div class="field">
                        <p class="control has-icons-left has-icons-right">
                          <input class="input " type="password" placeholder="Mot de passe" name="password" required/>
                          <span class="icon is-left">
                            <i class="fa fa-lock"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fa fa-eye"></i>
                          </span>
                        </p>
                       
                      </div>
                      <div class="control has-icons-left">
                      <div class="field">
                    <div class="select">
                     <select required>
                        <option disabled>Sélectionner votre role</option>
                        
                         <option>Administrateur</option>
                         <option>Enseignant</option>
                         <option>Etudiant</option>
                         
                     </select>
                    </div>
                     <span class="icon is-left">
                            <i class="fas fa-user"></i>
                     </span></div>
                    </div>
                      <div class="field is-grouped is-grouped-centered login-btn-group">
                        <p class="control">
                          <a class="login-btn" href="/profil">
                            Se connecter
                          </a>
                          
                        </p>
                        
                      </div>

                        





                    </form>
                  </div>
                </div>
              </div>
              
          </div>
        </div>
       
      </div>
  </section>
        );
    }
}