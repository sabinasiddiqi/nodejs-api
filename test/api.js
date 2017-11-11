process.env.NODE_ENV = 'test'

const mongoose = require("mongoose")
const Provider = require('../models/provider')
const chai = require('chai')
const chaiHttp = require('chai-http')

const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('API Routes', () => {

  // wipe db prior to every test
  beforeEach((done) => {
    Provider.remove({}, (err) => {
       done()
    })
  })

  describe('/GET api/providers', () => {
    it('should GET all the providers', (done) => {
      chai.request(server)
        .get('/api/providers')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            res.body.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/GET api/providers?max_discharges=:max_discharges&min_discharges=:min_discharges', () => {
    it('should GET provider by the given query params', (done) => {
      Provider.create({ total_discharges: 91 }, function (err, it) {
        if (err) return err;
        chai.request(server)
          .get(`/api/providers?max_discharges=${it.total_discharges}&min_discharges=${it.total_discharges}`)
          .end((err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('array')
              res.body.length.should.be.eql(1)
            done()
          })
      })
    })
  })

  describe('/GET api/providers?max_avg_covered_charges=:max_avg_covered_charges&min_avg_covered_charges=:min_avg_covered_charges', () => {
    it('should GET provider by the given query params', (done) => {
      Provider.create({ avg_covered_charges: 1232.22 }, function (err, it) {
        if (err) return err;
        chai.request(server)
          .get(`/api/providers?max_avg_covered_charges=${it.avg_covered_charges}&min_avg_covered_charges=${it.avg_covered_charges}`)
          .end((err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('array')
              res.body.length.should.be.eql(1)
            done()
          })
      })
    })
  })
  
  describe('/GET api/providers?max_avg_medicare_payment=:max_avg_medicare_payment&min_avg_medicare_payments=:min_avg_medicare_payment', () => {
    it('should GET provider by the given query params', (done) => {
      Provider.create({ avg_medicare_payment: 1232.22 }, function (err, it) {
        if (err) return err;
        chai.request(server)
          .get(`/api/providers?max_avg_medicare_payment=${it.avg_medicare_payment}&min_avg_medicare_payment=${it.avg_medicare_payment}`)
          .end((err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('array')
              res.body.length.should.be.eql(1)
            done()
          })
      })
    })
  })

  describe('/GET api/providers?state=:state', () => {
    it('should GET provider by the given query params', (done) => {
      Provider.create({ state: 'AL' }, function (err, it) {
        if (err) return err;
        chai.request(server)
          .get(`/api/providers?state=${it.state}`)
          .end((err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('array')
              res.body.length.should.be.eql(1)
            done()
          })
      })
    })
  })

})
