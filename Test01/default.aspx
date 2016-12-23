<%@ Page Title="Test01" Language="C#" MasterPageFile="~/Test01.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Test01._default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link rel="stylesheet" type="text/css" href="CSS\RandomNumber.css" runat="server" />
    <style type="text/css">
        
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
        <div>
            <h1 style="font-family: 'Courier New'">Test01</h1>
        </div>
        <div>
            <asp:Label runat="server" Font-Names="Courier New">Input:</asp:Label>
            <input type="text" id="inputText" style="font-family: 'Courier New'" />
            <br />

            <asp:Label runat="server" Font-Names="Courier New">Min. Int:</asp:Label>
            <input type="text" id="minIntText" style="font-family: 'Courier New'" />
            <br />

            <asp:Label runat="server" Font-Names="Courier New">Max. Int:</asp:Label>
            <input type="text" id="maxIntText" style="font-family: 'Courier New'" />

            <input type="button" value="Enter" onclick="onClick()" />

            <asp:Label runat="server" Font-Names="Courier New">Max. Int:</asp:Label>
            <asp:Label runat="server" Font-Names="Courier New">Count:</asp:Label>
            <input type="text" id="countText" style="font-family: 'Courier New'" />

        </div>

        <br />

        <div>
            <asp:Label runat="server" Font-Names="Courier New">Output:</asp:Label>
            <asp:TextBox ID="outputTextBox" runat="server" Height="200px" Width="250px" ReadOnly="True" TextMode="MultiLine"></asp:TextBox>
        </div>
        <br />
        <br />
        <div>
            <asp:TextBox ID="randomOutTextBox" runat="server"></asp:TextBox>
            <input type="button" id="RandomButton" value="Get Random Number" />
        </div>
        <br />
        <br />
        <div>
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            <input type="text" class="range" id="minRng" placeholder="min" />
            <input type="text" class="range" id="maxRng" placeholder="max" />
            <input type="button" id="RangedRandomButton" value="Ranged Random Number" />
        </div>
        <div id="errorOutput">
        </div>
  
</asp:Content>
