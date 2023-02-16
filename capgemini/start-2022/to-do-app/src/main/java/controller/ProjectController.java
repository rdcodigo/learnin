/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.Project;
import util.ConnectionFactory;

/**
 *
 * @author Ana Sara
 */
public class ProjectController {

    public void save(Project project) {

        String sql = "INSERT INTO projects(name, "
                + "description, "
                + "createdAt, "
                + "updatedAt) "
                + "VALUES (?, ?, ?, ?)";

        Connection connection = null;
        PreparedStatement statement = null;

        try {

            // Estabelecendo conexão com o banco de dados
            connection = ConnectionFactory.getConnection();

            // Preparando a query
            statement = connection.prepareStatement(sql);

            // Setando os valores do statement
            statement.setString(1, project.getName());
            statement.setString(2, project.getDescription());
            statement.setDate(3, new Date(project.getCreatedAt().getTime()));
            statement.setDate(4, new Date(project.getUpdatedAt().getTime()));

            // Executando a query
            statement.execute();

        } catch (Exception ex) {
            throw new RuntimeException("Erro ao salvar o projeto", ex);
        } finally {
            ConnectionFactory.closeConnection(connection, statement);
        }
    }

    public void update(Project project) {

        String sql = "UPDATE tasks SET "
                + "name = ?, "
                + "description = ?, "
                + "createdAt = ?, "
                + "updatedAt = ?, "
                + "WHERE id= ?";

        Connection connection = null;
        PreparedStatement statement = null;

        try {

            // Estabelecendo conexão com o banco de dados
            connection = ConnectionFactory.getConnection();

            // Preparando a query
            statement = connection.prepareStatement(sql);

            // Setando os valores do statement
            statement.setString(1, project.getName());
            statement.setString(2, project.getDescription());
            statement.setDate(3, new Date(project.getCreatedAt().getTime()));
            statement.setDate(4, new Date(project.getUpdatedAt().getTime()));
            statement.setInt(5, project.getId());

            // Executando a query
            statement.execute();

        } catch (Exception ex) {
            throw new RuntimeException("Erro ao atualizar o projeto"
                    + ex.getMessage(), ex);
        } finally {
            ConnectionFactory.closeConnection(connection, statement);
        }
    }

    public void removeById(int projectId) throws SQLException {

        String sql = "DELETE FROM projects WHERE id = ?";

        Connection connection = null;
        PreparedStatement statement = null;

        try {
            // Estabelecendo conexão com o banco de dados
            connection = ConnectionFactory.getConnection();

            // Preparando a query
            statement = connection.prepareStatement(sql);

            // Setando os valores do statement
            statement.setInt(1, projectId);

            // Executando a query
            statement.execute();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao deletar a tarefa", e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement);
        }
    }

    public List<Project> getAll() {

        String sql = "SELECT * FROM projects";

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;

        // Lista de tarefas que será devolvida quando a chamada do método acontecer
        List<Project> projects = new ArrayList<Project>();

        try {
            // Estabelecendo conexão com o banco de dados
            connection = ConnectionFactory.getConnection();

            // Preparando a query
            statement = connection.prepareStatement(sql);

            // Valor retornado pela execução da query
            resultSet = statement.executeQuery();

            // Enquanto houverem valores a serem percoridos no meu resultset
            while (resultSet.next()) {
                Project project = new Project();

                project.setId(resultSet.getInt("id"));
                project.setName(resultSet.getString("name"));
                project.setDescription(resultSet.getString("description"));
                project.setCreatedAt(resultSet.getDate("createdAt"));
                project.setUpdatedAt(resultSet.getDate("UpdatedAt"));

                projects.add(project);
            }
        } catch (Exception ex) {
            throw new RuntimeException("Erro ao buscar os projetos"
                    + ex.getMessage(), ex);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, resultSet);
        }

        // Listas de tarefas que foi criada e carregada do banco de dados
        return projects;
    }
}
