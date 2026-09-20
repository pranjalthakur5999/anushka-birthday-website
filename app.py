from flask import Flask, render_template, request, jsonify, redirect, session
import os

app = Flask(__name__)

# Secret key for login sessions
app.secret_key = os.environ.get(
    "SECRET_KEY",
    "your-secret-key-change-this"
)

# Website password
PASSWORD = os.environ.get(
    "WEBSITE_PASSWORD",
    "Anushka123"
)


# Login page
@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        password = request.form.get("password")

        if password == PASSWORD:
            session["logged_in"] = True
            return redirect("/birthday")

        return render_template(
            "login.html",
            error="Wrong password ❤️"
        )

    return render_template("login.html")


# Birthday website
@app.route("/birthday")
def birthday():
    if not session.get("logged_in"):
        return redirect("/")

    return render_template("index.html")


# Your existing API, now protected
@app.route("/api/message", methods=["POST"])
def save_message():
    if not session.get("logged_in"):
        return jsonify({
            "success": False,
            "error": "Unauthorized"
        }), 401

    data = request.get_json(silent=True) or {}

    return jsonify({
        "success": True,
        "reply": f"Pranjal's message for Anushka: "
                 f"{data.get('message', 'You are special to me ❤️')}"
    })


# Logout
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)