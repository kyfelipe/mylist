package com.felipecortes.mylist.domains;

import javax.persistence.Entity;

@Entity
public class Usuario {
    private String email;
    private String senha;
    private String nome;
    private String apelido;
    private String bibliografia;
}
