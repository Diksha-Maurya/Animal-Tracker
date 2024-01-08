package com.bezkoder.springjwt.models;

import jakarta.persistence.*;

@Entity
@Table(name = "movements")
public class Movement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long movementid;

    @Column
    private Integer companyid;

    @Column
    private Integer movementreasonid;

    @Column
    private Integer speciesid;

    @Column
    private Integer originaddressid;

    public Long getMovementid() {
        return movementid;
    }

    public void setMovementid(Long movementid) {
        this.movementid = movementid;
    }

    public Integer getCompanyid() {
        return companyid;
    }

    public void setCompanyid(Integer companyid) {
        this.companyid = companyid;
    }

    public Integer getMovementreasonid() {
        return movementreasonid;
    }

    public void setMovementreasonid(Integer movementreasonid) {
        this.movementreasonid = movementreasonid;
    }

    public Integer getSpeciesid() {
        return speciesid;
    }

    public void setSpeciesid(Integer speciesid) {
        this.speciesid = speciesid;
    }

    public Integer getOriginaddressid() {
        return originaddressid;
    }

    public void setOriginaddressid(Integer originaddressid) {
        this.originaddressid = originaddressid;
    }

    public Integer getOriginfarmid() {
        return originfarmid;
    }

    public void setOriginfarmid(Integer originfarmid) {
        this.originfarmid = originfarmid;
    }

    public Integer getDestinationaddressid() {
        return destinationaddressid;
    }

    public void setDestinationaddressid(Integer destinationaddressid) {
        this.destinationaddressid = destinationaddressid;
    }

    public Integer getDestinationfarmid() {
        return destinationfarmid;
    }

    public void setDestinationfarmid(Integer destinationfarmid) {
        this.destinationfarmid = destinationfarmid;
    }

    public Integer getNumitemsmoved() {
        return numitemsmoved;
    }

    public void setNumitemsmoved(Integer numitemsmoved) {
        this.numitemsmoved = numitemsmoved;
    }

    public Integer getShipmentstartdate() {
        return shipmentstartdate;
    }

    public void setShipmentstartdate(Integer shipmentstartdate) {
        this.shipmentstartdate = shipmentstartdate;
    }

    @Column
    private Integer originfarmid;

    @Column
    private Integer destinationaddressid;

    @Column
    private Integer destinationfarmid;

    @Column
    private Integer numitemsmoved;

    @Column
    private Integer shipmentstartdate;

    public Movement(Long movementid, Integer companyid, Integer movementreasonid, Integer speciesid, Integer originaddressid, Integer originfarmid, Integer destinationaddressid, Integer destinationfarmid, Integer numitemsmoved, Integer shipmentstartdate) {
        this.movementid = movementid;
        this.companyid = companyid;
        this.movementreasonid = movementreasonid;
        this.speciesid = speciesid;
        this.originaddressid = originaddressid;
        this.originfarmid = originfarmid;
        this.destinationaddressid = destinationaddressid;
        this.destinationfarmid = destinationfarmid;
        this.numitemsmoved = numitemsmoved;
        this.shipmentstartdate = shipmentstartdate;
    }

    public Movement() {
    }
}
