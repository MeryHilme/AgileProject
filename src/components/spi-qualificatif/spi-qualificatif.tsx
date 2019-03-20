//Lister

import { Component, State } from '@stencil/core';
import { Coupledequalificatif } from '../../global/Coupledequalificatif';

@Component({
    tag: 'spi-qualificatif',
    styleUrl: 'spi-qualificatif.scss',
})
export class SpiListCoupleDeQualificatif {

    @State() coupledequalificatifs: Coupledequalificatif[] = [];


    componentWillLoad() {
        fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/qualificatif')
            .then(res => res.json())
            .then(res => this.coupledequalificatifs = res);
    }

    deleteQualificatif(EnsObj) {
        return fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/qualificatif/supprimer', {
            method: 'delete',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(EnsObj),
        }).then(() => {
            alert("Le couple de qualificatif a été bien supprimer!");
            location.href = '/ListQ';
        }
        ).catch((error) => {
            alert(' Erreur ! Veuillez réssayer plutard !');
            console.error(error);
        });
    }

    render() {
        if (this.coupledequalificatifs != null) {
            return (
                <div class="container">
                    <div class="columns">
                        <div class="columns is-desktop is-multiline">
                            {
                                this.coupledequalificatifs.map((item) => {
                                    return (
                                        <div class="card">
                                            <header class="card-header">
                                                <p class="card-header-title">
                                                    {item.idQualificatif}
                                                </p>
                                            </header>
                                            <div class="card-image">
                                                <figure class="image is-4by3">
                                                    <img src="https://images.pexels.com/photos/1558690/pexels-photo-1558690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <div class="content">
                                                    <span>{item.maximal}   {item.minimal}</span>
                                                </div>
                                                <footer class="card-footer">                                                  
                                                    <button class="card-footer-item" onClick={() => this.deleteQualificatif(this.coupledequalificatifs)}>Supprimer</button>                                                   
                                               </footer>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div> </div>
                </div>
            );
        }
        else {
            return ("couldn't render the data ");

        }
    }

}