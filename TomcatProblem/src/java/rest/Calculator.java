/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import facades.CurrencyFacade;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

/**
 * REST Web Service
 *
 * @author Cookie
 */
@Path("currency")
@RolesAllowed("User")
public class Calculator {

    @Context
    private UriInfo context;
    private Gson gson = new GsonBuilder().setPrettyPrinting().setFieldNamingPolicy(FieldNamingPolicy.IDENTITY).create();
    CurrencyFacade cf = new CurrencyFacade();

    /**
     * Creates a new instance of Calculator
     */
    public Calculator() {
    }

    public String jsonAmount(Double amount) {
        JsonObject jsObj = new JsonObject();
        jsObj.addProperty("amount", amount);
        return gson.toJson(jsObj);
    }

    /**
     * Retrieves representation of an instance of rest.Calculator
     *
     * @param amount
     * @param fromcurrency
     * @param tocurrency
     * @return an instance of java.lang.String
     */
    @GET
//    @Produces("application/xml")
    @Path("calculator/:amount/:fromcurrency/:tocurrency")
    public String getToAndFrom(@PathParam("amount") Double amount, @PathParam("fromcurrency") String fromcurrency, @PathParam("tocurrency") String tocurrency) {
        String toAndFrom = jsonAmount(cf.Calculator(amount, fromcurrency, tocurrency));
        return toAndFrom;
    }

    /**
     * PUT method for updating or creating an instance of Calculator
     *
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/xml")
    public void putXml(String content) {
    }
}
