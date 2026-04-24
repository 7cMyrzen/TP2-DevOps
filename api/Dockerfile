FROM python:3.11-alpine

WORKDIR /app

# Create a non-root user
RUN addgroup -S apiuser && adduser -S apiuser -G apiuser

# Install curl for healthcheck and build dependencies for python packages
RUN apk add --no-cache curl build-base libffi-dev

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chown -R apiuser:apiuser /app
USER apiuser

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
