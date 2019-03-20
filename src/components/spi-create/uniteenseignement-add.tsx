import { Component, Prop } from '@stencil/core';
import { Formation } from '../../global/formation';
import { Enseignant } from '../../global/enseignant';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'uniteenseignement-add',
  styleUrl: 'uniteenseignement-add.scss'
})
export class Adduni {

  @Prop() history: RouterHistory;
  codeUe: string;
  description: string;
  nbhCm: 0;
  nbhTd: 0;
  nbhTp: 0;
  semestre: string;
  pays: any;
  nationalities: any
  formations: Formation[] = [];
  formation: any = {};
  enseignants: Enseignant[] = [];
  enseignant: any = {};
  backk() {
    alert('The enseignant was added!');
    window.location.replace("/list"); // or we can use RouterHistory
  }
  creerUnite(u) {
    u.preventDefault();
    console.log("!");
    // codeUe = this.codeUe
    const description = this.description;
    const nbhCm = this.nbhCm;
    const nbhTd = this.nbhTd;
    const nbhTp = this.nbhTp;
    const semestre = this.semestre;

    //const formations =this.formations;
    const formation = this.formation;
    const enseignant = this.enseignant;
    const id = {
      "codeFormation": this.formation.codeFormation,
      "codeUe": this.codeUe
    }
    // const enseignants =this.enseignants;


    const payload = {
      id,
      description,
      nbhCm,
      nbhTd,
      nbhTp,
      semestre,
      formation,
      enseignant

    };

   
    console.log(JSON.stringify(payload));
    fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/uniteEnseignement/creer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then((response) => response.json())
      .then((responseJson) => {
        this.backk();
        return responseJson.enseignants;
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  componentWillLoad() {
    return fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/formations")
      .then(response => response.json())
      .then(data => {
        this.formations = data || []; console.log(this.formations);
      }) &&
      fetch("http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/enseignant")
        .then(response => response.json())
        .then(data => {
          this.enseignants = data || []; console.log(this.enseignants);
        });
  }
  back() {
    this.history.goBack();
  }

  render() {
    return (
      <section class="section">
        <div class="container">
        <div class="section-heading">
       <h2 class="title is-3"><font color="white">Ajouter une nouvelle unité d'enseignement</font></h2>
       
      </div>
          <br /><br />

          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="box is-transparent">
                <form>

                  <div class="field">
                    <label class="label">Code d'unité d'enseignement </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Veuillez saisir le code d'unité d'enseignement" name="code UE" value="" onChange={(e: any) => (this.codeUe = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
                    </p>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Description </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Veuillez saisir la description" name="description" value="" onChange={(e: any) => (this.description = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-chalkboard"></i></span>
                    </p>
                    </div>
                  </div>


                  <div class="field-body">
                    <div class="field">
                      <label class="label"> Enseignant <span class="red"></span> </label>
                      <p class="control has-icons-left has-icons-right">
                        <div class="select is-info is-extra-small">
                          <span class="icon"> <i class="fas fa-user-tie"></i></span>

                          <select class="is-rounded is-info" required onInput={(e: any) => (this.enseignant.noEnseignant = e.target.value)}>
                            {this.enseignants.map(item =>
                              <option value={item.noEnseignant}>{item.nom}&nbsp;{item.prenom}</option>
                            )}
                          </select>
                        </div>

                      </p>
                    </div>
                    <div class="field">
                      <label class="label"> Formation <span class="red"></span> </label>
                      <p class="control has-icons-left has-icons-right">
                        <div class="select is-info is-extra-small">
                          <span class="icon"><i class="fas fa-book"></i></span>
                          <select class="is-info" required onInput={(e: any) => (this.formation.codeFormation = e.target.value)}>
                            {this.formations.map(item =>

                              <option value={item.codeFormation}>{item.codeFormation}</option>
                            )}
                          </select>
                        </div>

                      </p>
                    </div>

                  </div>
                  <br />

                  <div class="field">
                    <label class="label ">Semestre</label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Quel semestre ?" name="semestre" value="" onChange={(e: any) => (this.semestre = e.target.value)} />
                    <span class="icon is-small is-left"><i class="fab fa-stripe-s"></i></span>
                    </p>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Nombre d'heure de Cours </label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input " type="text" placeholder="Nombre d'heures des cours ?" name="nbhCm" value="" onChange={(e: any) => (this.nbhCm = e.target.value)} />
                    <span class="icon is-small is-left"><i class="fas fa-clock"></i></span>
                   </p>

                    </div>
                  </div>

                  <div class="field">
                    <label class="label ">Nombre d'heures de TD</label>
                    <div class="control">
                      <p class="control is-expanded has-icons-left">

                        <input class="input" type="text" placeholder="Entrez le nombre d'heures des travaux dirigés" name="nbhTd" value="" onChange={(e: any) => (this.nbhTd = e.target.value)} />
                    <span class="icon is-small is-left"><i class="fas fa-clock"></i></span>
                      </p>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Nombre d'heures de TP</label>
                    <div class="control">
                    <p class="control is-expanded has-icons-left">

                      <input class="input" type="text" placeholder="Entrez le nombre d'heures des travaux pratiques" name="nbhTp" value="" onChange={(e: any) => (this.nbhTp = e.target.value)} />
                      <span class="icon is-small is-left"><i class="fas fa-clock"></i></span>
</p>
                    </div>
                  </div>

                  <br />
                  <div class="field is-grouped has-text-centered">
                    <div class="control">
                      <button type="submit" class="button is-primary" onClick={this.creerUnite.bind(this)}>
                        <span class="icon">
                          <i class="fas fa-check"></i>                          </span>
                        <span>Ajouter </span></button>


                    </div>
                    <div class="control">

                      <button type="reset" class="button is-danger " value="Reset">
                        <span class="icon">
                          <i class="fas fa-ban"></i></span>
                        <span>Cancel</span></button>


                    </div>

                    <div class="control">
                      <button class="button is-info" onClick={this.back}>
                        <span class="icon"><i class="fas fa-undo"></i></span>
                        <span>Retour</span></button>
                    </div>


                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}